# backend/app/main.py

from fastapi import FastAPI

from app.api.documents import router as documents_router
from app.api.health import router as health_router

app = FastAPI(
    title="Legal RAG Demo Backend",
    description="Backend API for the Case Hunter AI legal RAG portfolio project.",
    version="0.1.0",
)

app.include_router(health_router)
app.include_router(documents_router)
