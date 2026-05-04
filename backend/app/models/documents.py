# backend\app\models\documents.py



from pydantic import BaseModel


class DocumentMetadata(BaseModel):
    """Metadata describing a document available to the RAG system."""

    id: str
    title: str
    type: str
    domain: str
    available: bool


class DocumentsResponse(BaseModel):
    """Response model for the document catalog endpoint."""

    documents: list[DocumentMetadata]
    uploaded_document: DocumentMetadata | None
