from asyncio.windows_events import NULL
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/login")
async def login(request: Request):
    username=request.headers.get('username')
    password=request.headers.get('password')

    print(request.headers.get('password'))
    data = {
        'token': 'BWDLZHDFuDUAy4T'
    }
    return data

@app.get("/getUtlaan")
async def getUtlaan(request: Request):
    token=request.headers.get('token')
    if (token != "BWDLZHDFuDUAy4T"):
        data={'not':'authorized'}
    else:
        data={
            'borr':'415cd50c-6b0e-4171-b11c-b0f4984df2d6',
            'hammer':'80c21c1e-bf3d-4937-bd8c-c7af21c292da'
        }
    return data

@app.post("/nytttUtlaan")
async def nyttUtlaan(request: Request):
    token=request.headers.get('token')
    serienummer=request.headers.get('nyttutlaan')
    if (token != "BWDLZHDFuDUAy4T"):
        data={'not':'authorized'}
    else:
        data={
            "utlaant":"OK"
        }
    return data