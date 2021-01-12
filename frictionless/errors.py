from .metadata import Metadata
from .exception import FrictionlessException


# TODO:
# Consider other approached for report/errors as dict is not really
# effective as it can be very memory consumig. As an option we can store
# raw data without rendering an error template to an error messsage


class Error(Metadata):
    """Error representation

    API      | Usage
    -------- | --------
    Public   | `from frictionless import errors`

    Parameters:
        descriptor? (str|dict): error descriptor
        note (str): an error note

    Raises:
        FrictionlessException: raise any error that occurs during the process

    """

    code = "error"
    name = "Error"
    tags = []  # type: ignore
    template = "{note}"
    description = "Error"

    def __init__(self, descriptor=None, *, note):
        self.setinitial("code", self.code)
        self.setinitial("name", self.name)
        self.setinitial("tags", self.tags)
        self.setinitial("note", note)
        self.setinitial("message", self.template.format(**self))
        self.setinitial("description", self.description)
        super().__init__(descriptor)

    @property
    def note(self):
        """
        Returns:
            str: note
        """
        return self["note"]

    @property
    def message(self):
        """
        Returns:
            str: message
        """
        return self["message"]


class HeaderError(Error):
    """Header error representation

    Parameters:
        descriptor? (str|dict): error descriptor
        note (str): an error note
        labels (str[]): header labels
        label (str): an errored label
        field_name (str): field name
        field_number (int): field number
        field_position (int): field position

    Raises:
        FrictionlessException: raise any error that occurs during the process

    """

    code = "header-error"
    name = "Header Error"
    tags = ["#header"]
    template = "Cell Error"
    description = "Cell Error"

    def __init__(
        self,
        descriptor=None,
        *,
        note,
        labels,
        row_positions,
    ):
        self.setinitial("labels", labels)
        self.setinitial("rowPositions", row_positions)
        super().__init__(descriptor, note=note)


class LabelError(HeaderError):
    """Label error representation

    Parameters:
        descriptor? (str|dict): error descriptor
        note (str): an error note
        labels (str[]): header labels
        label (str): an errored label
        field_name (str): field name
        field_number (int): field number
        field_position (int): field position

    Raises:
        FrictionlessException: raise any error that occurs during the process

    """

    code = "label-error"
    name = "Label Error"
    tags = ["#header"]
    template = "Label Error"
    description = "Label Error"

    def __init__(
        self,
        descriptor=None,
        *,
        note,
        labels,
        label,
        row_positions,
        field_name,
        field_number,
        field_position,
    ):
        self.setinitial("label", label)
        self.setinitial("fieldName", field_name)
        self.setinitial("fieldNumber", field_number)
        self.setinitial("fieldPosition", field_position)
        super().__init__(
            descriptor,
            note=note,
            labels=labels,
            row_positions=row_positions,
        )


class RowError(Error):
    """Row error representation

    Parameters:
        descriptor? (str|dict): error descriptor
        note (str): an error note
        row_number (int): row number
        row_position (int): row position

    Raises:
        FrictionlessException: raise any error that occurs during the process

    """

    code = "row-error"
    name = "Row Error"
    tags = ["#content"]
    template = "Row Error"
    description = "Row Error"

    def __init__(self, descriptor=None, *, note, cells, row_number, row_position):
        self.setinitial("cells", cells)
        self.setinitial("rowNumber", row_number)
        self.setinitial("rowPosition", row_position)
        super().__init__(descriptor, note=note)

    # Create

    @classmethod
    def from_row(cls, row, *, note):
        """Create an error from a row

        Parameters:
            row (Row): row
            note (str): note

        Returns:
            RowError: error
        """
        return cls(
            note=note,
            cells=list(map(str, row)),
            row_number=row.row_number,
            row_position=row.row_position,
        )


class CellError(RowError):
    """Cell error representation

    Parameters:
        descriptor? (str|dict): error descriptor
        note (str): an error note
        cells (str[]): row cells
        row_number (int): row number
        row_position (int): row position
        cell (str): errored cell
        field_name (str): field name
        field_number (int): field number
        field_position (int): field position

    # Raises
        FrictionlessException: raise any error that occurs during the process

    """

    code = "cell-error"
    name = "Cell Error"
    tags = ["#content"]
    template = "Cell Error"
    description = "Cell Error"

    def __init__(
        self,
        descriptor=None,
        *,
        note,
        cells,
        row_number,
        row_position,
        cell,
        field_name,
        field_number,
        field_position,
    ):
        self.setinitial("cell", cell)
        self.setinitial("fieldName", field_name)
        self.setinitial("fieldNumber", field_number)
        self.setinitial("fieldPosition", field_position)
        super().__init__(
            descriptor,
            note=note,
            cells=cells,
            row_number=row_number,
            row_position=row_position,
        )

    # Create

    @classmethod
    def from_row(cls, row, *, note, field_name):
        """Create and error from a cell

        Parameters:
            row (Row): row
            note (str): note
            field_name (str): field name

        Returns:
            CellError: error
        """
        # This algorithm can be optimized by storing more information in a row
        # At the same time, this function should not be called very often
        for field_number, name in enumerate(row.field_names, start=1):
            if field_name == name:
                cell = row[field_name]
                field_position = row.field_positions[field_number - 1]
                return cls(
                    note=note,
                    cells=list(map(str, row.values())),
                    row_number=row.row_number,
                    row_position=row.row_position,
                    cell=str(cell),
                    field_name=field_name,
                    field_number=field_number,
                    field_position=field_position,
                )
        error = Error(note=f"Field {field_name} is not in the row")
        raise FrictionlessException(error)


# General


class PackageError(Error):
    code = "package-error"
    name = "Package Error"
    tags = ["#general"]
    template = "The data package has an error: {note}"
    description = "A validation cannot be processed."


class ResourceError(Error):
    code = "resource-error"
    name = "Resource Error"
    tags = ["#general"]
    template = "The data resource has an error: {note}"
    description = "A validation cannot be processed."


class InquiryError(Error):
    code = "inquiry-error"
    name = "Inquiry Error"
    tags = ["#general"]
    template = "The inquiry is not valid: {note}"
    description = "Provided inquiry is not valid."


class ReportError(Error):
    code = "report-error"
    name = "Report Error"
    tags = ["#general"]
    template = "The validation report has an error: {note}"
    description = "A validation cannot be presented."


class PipelineError(Error):
    code = "pipeline-error"
    name = "Pipeline Error"
    tags = ["#general"]
    template = "The pipeline is not valid: {note}"
    description = "Provided pipeline is not valid."


class TaskError(Error):
    code = "task-error"
    name = "Task Error"
    tags = ["#general"]
    template = "The validation task has an error: {note}"
    description = "General task-level error."


class CheckError(Error):
    code = "check-error"
    name = "Check Error"
    tags = ["#general"]
    template = "The validation check has an error: {note}"
    description = "A validation check cannot be created"


class StepError(Error):
    code = "step-error"
    name = "Step Error"
    tags = ["#general"]
    template = "The transfrom step has an error: {note}"
    description = "A transform step cannot be finished"


class StorageError(Error):
    code = "storage-error"
    name = "Storage Error"
    tags = ["#general"]
    template = "The storage has an error: {note}"
    description = "A storage's operation cannot be performed"


# Table


class SourceError(Error):
    code = "source-error"
    name = "Source Error"
    tags = ["#table"]
    template = "The data source has not supported or has inconsistent contents: {note}"
    description = "Data reading error because of not supported or inconsistent contents."


class SchemeError(Error):
    code = "scheme-error"
    name = "Scheme Error"
    tags = ["#table"]
    template = "The data source could not be successfully loaded: {note}"
    description = "Data reading error because of incorrect scheme."


class FormatError(Error):
    code = "format-error"
    name = "Format Error"
    tags = ["#table"]
    template = "The data source could not be successfully parsed: {note}"
    description = "Data reading error because of incorrect format."


class EncodingError(Error):
    code = "encoding-error"
    name = "Encoding Error"
    tags = ["#table"]
    template = "The data source could not be successfully decoded: {note}"
    description = "Data reading error because of an encoding problem."


class HashingError(Error):
    code = "hashing-error"
    name = "Hashing Error"
    tags = ["#table"]
    template = "The data source could not be successfully hashed: {note}"
    description = "Data reading error because of a hashing problem."


class CompressionError(Error):
    code = "compression-error"
    name = "Compression Error"
    tags = ["#table"]
    template = "The data source could not be successfully decompressed: {note}"
    description = "Data reading error because of a decompression problem."


class ControlError(Error):
    code = "control-error"
    name = "Control Error"
    tags = ["#table", "#control"]
    template = "Control object is not valid: {note}"
    description = "Provided control is not valid."


class DialectError(Error):
    code = "dialect-error"
    name = "Dialect Error"
    tags = ["#table", "#dialect"]
    template = "Dialect object is not valid: {note}"
    description = "Provided dialect is not valid."


class LayoutError(Error):
    code = "layout-error"
    name = "Layout Error"
    tags = ["#table", "#layout"]
    template = "The data source could not be successfully described by the invalid Table Layout: {note}"
    description = "Provided layout is not valid."


class SchemaError(Error):
    code = "schema-error"
    name = "Schema Error"
    tags = ["#table", "#schema"]
    template = "The data source could not be successfully described by the invalid Table Schema: {note}"
    description = "Provided schema is not valid."


class FieldError(Error):
    code = "field-error"
    name = "Field Error"
    tags = ["#table", "schema", "#field"]
    template = "The data source could not be successfully described by the invalid Table Schema: {note}"
    description = "Provided field is not valid."


class ChecksumError(Error):
    code = "checksum-error"
    name = "Checksum Error"
    tags = ["#table", "#checksum"]
    template = "The data source does not match the expected checksum: {note}"
    description = "This error can happen if the data is corrupted."


# Head


class ExtraLabelError(LabelError):
    code = "extra-label"
    name = "Extra Label"
    tags = ["#header", "#structure"]
    template = 'There is an extra label "{label}" in header at position "{fieldPosition}"'
    description = "The header of the data source contains label that does not exist in the provided schema."


class MissingLabelError(LabelError):
    code = "missing-label"
    name = "Missing Label"
    tags = ["#header", "#structure"]
    template = 'There is a missing label in the header\'s field "{fieldName}" at position "{fieldPosition}"'
    description = "Based on the schema there should be a label that is missing in the data's header."


class BlankLabelError(LabelError):
    code = "blank-label"
    name = "Blank Label"
    tags = ["#header", "#structure"]
    template = 'Label in the header in field at position "{fieldPosition}" is blank'
    description = "A label in the header row is missing a value. Label should be provided and not be blank."


class DuplicateLabelError(LabelError):
    code = "duplicate-label"
    name = "Duplicate Label"
    tags = ["#header", "#structure"]
    template = 'Header\'s label "{label}" in field at position "{fieldPosition}" is duplicated to label in another field: {note}'
    description = "Two columns in the header row have the same value. Column names should be unique."


class BlankHeaderError(HeaderError):
    code = "blank-header"
    name = "Blank Header"
    tags = ["#header", "#structure"]
    template = "Header is completely blank"
    description = "This header is empty. A header should contain at least one value."


class IncorrectLabelError(LabelError):
    code = "incorrect-label"
    name = "Incorrect Label"
    tags = ["#header", "#schema"]
    template = 'Label "{label}" in field {fieldName} at position "{fieldPosition}" does not match the field name in the schema'
    description = "One of the data source header does not match the field name defined in the schema."


# Body


class ExtraCellError(CellError):
    code = "extra-cell"
    name = "Extra Cell"
    tags = ["#content", "#structure"]
    template = 'Row at position "{rowPosition}" has an extra value in field at position "{fieldPosition}"'
    description = "This row has more values compared to the header row (the first row in the data source). A key concept is that all the rows in tabular data must have the same number of columns."


class MissingCellError(CellError):
    code = "missing-cell"
    name = "Missing Cell"
    tags = ["#content", "#structure"]
    template = 'Row at position "{rowPosition}" has a missing cell in field "{fieldName}" at position "{fieldPosition}"'
    description = "This row has less values compared to the header row (the first row in the data source). A key concept is that all the rows in tabular data must have the same number of columns."


class BlankRowError(RowError):
    code = "blank-row"
    name = "Blank Row"
    tags = ["#content", "#structure"]
    template = 'Row at position "{rowPosition}" is completely blank'
    description = "This row is empty. A row should contain at least one value."


class TypeError(CellError):
    code = "type-error"
    name = "Missing Cell"
    tags = ["#content", "#schema"]
    template = 'The cell "{cell}" in row at position "{rowPosition}" and field "{fieldName}" at position "{fieldPosition}" has incompatible type: {note}'
    description = "The value does not match the schema type and format for this field."


class ConstraintError(CellError):
    code = "constraint-error"
    name = "Constraint Error"
    tags = ["#content", "#schema"]
    template = 'The cell "{cell}" in row at position "{rowPosition}" and field "{fieldName}" at position "{fieldPosition}" does not conform to a constraint: {note}'
    description = "A field value does not conform to a constraint."


class UniqueError(CellError):
    code = "unique-error"
    name = "Unique Error"
    tags = ["#content", "#schema", "#integrity"]
    template = 'Row at position "{rowPosition}" has unique constraint violation in field "{fieldName}" at position "{fieldPosition}": {note}'
    description = "This field is a unique field but it contains a value that has been used in another row."


class PrimaryKeyError(RowError):
    code = "primary-key-error"
    name = "PrimaryKey Error"
    tags = ["#content", "#schema", "#integrity"]
    template = 'The row at position "{rowPosition}" does not conform to the primary key constraint: {note}'
    description = "Values in the primary key fields should be unique for every row"


class ForeignKeyError(RowError):
    code = "foreign-key-error"
    name = "ForeignKey Error"
    tags = ["#content", "#schema", "#integrity"]
    template = 'The row at position "{rowPosition}" does not conform to the foreign key constraint: {note}'
    description = "Values in the foreign key fields should exist in the reference table"


# Misc


class DuplicateRowError(RowError):
    code = "duplicate-row"
    name = "Duplicate Row"
    tags = ["#content", "#heuristic"]
    template = "Row at position {rowPosition} is duplicated: {note}"
    description = "The row is duplicated."


# TODO: make cell error
class DeviatedValueError(Error):
    code = "deviated-value"
    name = "Deviated Value"
    tags = ["#content", "#heuristic"]
    template = "There is a possible error because the value is deviated: {note}"
    description = "The value is deviated."


class TruncatedValueError(CellError):
    code = "truncated-value"
    name = "Truncated Value"
    tags = ["#content", "#heuristic"]
    template = "The cell {cell} in row at position {rowPosition} and field {fieldName} at position {fieldPosition} has an error: {note}"
    description = "The value is possible truncated."


class BlacklistedValueError(CellError):
    code = "blacklisted-value"
    name = "Blacklisted Value"
    tags = ["#content", "#regulation"]
    template = "The cell {cell} in row at position {rowPosition} and field {fieldName} at position {fieldPosition} has an error: {note}"
    description = "The value is blacklisted."


class SequentialValueError(CellError):
    code = "sequential-value"
    name = "Sequential Value"
    tags = ["#content", "#regulation"]
    template = "The cell {cell} in row at position {rowPosition} and field {fieldName} at position {fieldPosition} has an error: {note}"
    description = "The value is not sequential."


class RowConstraintError(RowError):
    code = "row-constraint"
    name = "Row Constraint"
    tags = ["#content", "#regulation"]
    template = "The row at position {rowPosition} has an error: {note}"
    description = "The value does not conform to the row constraint."
