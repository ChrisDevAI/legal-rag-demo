# backend\app\api\health.py

from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check() -> dict[str, str]:
    """Return backend health status."""
    return {
        "status": "ok",
        "service": "legal-rag-demo-backend",
    }
