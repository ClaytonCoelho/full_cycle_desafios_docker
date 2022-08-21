FROM golang:1.19 AS builder

COPY . /app

WORKDIR /app

RUN go build hello-world.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/hello-world .

CMD [ "./hello-world" ]