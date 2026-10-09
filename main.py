from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="EduCore AI - By MURTAZA SHABBIR - $50k Edition")

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.get("/")
def home():
    return {
        "system": "EduCore AI Premium v2.5",
        "owner": "MURTAZA SHABBIR",
        "company": "Healthcare Diagnostic Services Tech Division",
        "location": "Jhelum, Pakistan",
        "value": "$50,000 Premium ERP",
        "status": "All AI Services Operational"
    }

@app.get("/api/students")
def students():
    return [{"id":1,"name":"Ali Raza","grade":"10","attendance":"96%","fees":"Paid","owner":"MURTAZA SHABBIR"}]

@app.get("/api/ai/insights")
def insights():
    return {"at_risk":23, "forecast":"+18%", "developed_by":"MURTAZA SHABBIR"}

# Run: uvicorn main:app --reload
