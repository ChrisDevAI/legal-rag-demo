# backend\app\data\documents.py


from app.models.documents import DocumentMetadata


BUILT_IN_DOCUMENTS: list[DocumentMetadata] = [
    DocumentMetadata(
        id="citizens-united",
        title="Citizens United v. FEC",
        type="builtin",
        domain="First Amendment / Campaign Finance",
        available=True,
    ),
    DocumentMetadata(
        id="brown-v-board",
        title="Brown v. Board of Education",
        type="builtin",
        domain="Equal Protection / Education",
        available=True,
    ),
    DocumentMetadata(
        id="miranda-v-arizona",
        title="Miranda v. Arizona",
        type="builtin",
        domain="Criminal Procedure / Fifth Amendment",
        available=True,
    ),
]
