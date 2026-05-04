# backend/app/api/documents.py

from fastapi import APIRouter

from app.data.documents import BUILT_IN_DOCUMENTS
from app.models.documents import DocumentsResponse

router = APIRouter(tags=["documents"])


@router.get("/documents", response_model=DocumentsResponse)
def get_documents() -> DocumentsResponse:
    """Return the currently available document catalog."""
    return DocumentsResponse(
        documents=BUILT_IN_DOCUMENTS,
        uploaded_document=None,
    )
