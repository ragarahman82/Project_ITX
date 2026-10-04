
import mysql.connector

def get_db_connection():
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="raga99",  # Isi password MySQL jika ada
        database="lapor_fasilitas"
    )
    return db
