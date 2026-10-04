from database import get_db_connection

try:
    db = get_db_connection()
    print("Koneksi ke database berhasil!")
    db.close()
except Exception as e:
    print("Koneksi gagal:", e)