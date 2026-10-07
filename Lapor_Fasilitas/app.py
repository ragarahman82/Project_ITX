from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("Login.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        nama = request.form["nama"]
        email = request.form["email"]
        password = request.form["password"]

        print("Nama:", nama)
        print("Email:", email)
        print("Password:", password)

        return "Data pendaftaran berhasil diterima!"

    return render_template("Daftar.html")


if __name__ == "__main__":
    app.run(debug=True)