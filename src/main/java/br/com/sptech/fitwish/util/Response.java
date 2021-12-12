package br.com.sptech.fitwish.util;

public class Response {
    private String status;
    private Object msg; // Object so it is possible to return various objects as responses

    public Response(String status, Object msg) {
        this.status = status;
        this.msg = msg;
    }

    public Response(String string) {
        this.status = string;
    }

    @Override
    public String toString() {
        return "Response [msg=" + msg + ", status=" + status + "]";
    }

    

}


