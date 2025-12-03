from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
class Post(BaseModel):
    txt : str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://172.26.63.194:3000", "http://localhost:3000"],  # Add your frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/save_comment/")
def save_comment(post : Post):
    comment_id = 'post'
    with open(f'backend/data/{comment_id}.txt','w') as fout:
        fout.write(post.txt)

@app.get("/get_comment")
def get_comment() -> str:
    lines = ""
    comment_id = "post"
    with open(f'backend/data/{comment_id}.txt','r') as fin:
        lines = fin.readlines()
    return " ".join(lines)