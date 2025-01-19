import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { postComment, fetchComments } from "../api";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Tambahkan ini untuk mengaktifkan loading saat submit

    if (!name || !attendance || !message) {
      Swal.fire({
        title: "Peringatan!",
        text: "Harap isi semua field sebelum mengirim!",
        icon: "warning",
        confirmButtonText: "OK",
      });

      setIsLoading(false); // Pastikan untuk mengubah kembali ke false setelah peringatan
      return;
    }

    const newComment = { name, attendance, message };
    try {
      await postComment(newComment);
      setComments((prev) => [newComment, ...prev]);
      setName("");
      setAttendance("");
      setMessage("");
      Swal.fire({
        title: "Berhasil!",
        text: "Komentar berhasil dikirim!",
        icon: "success",
        confirmButtonText: "OK",
      });

      const data = await fetchComments();
      setComments(data);
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan saat mengirim komentar.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false); // Pastikan untuk mengubah kembali ke false setelah proses selesai
    }
  };

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.error("Gagal memuat komentar:", error);
      }
    };
    loadComments();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const countAttendance = (status) => comments.filter((c) => c.attendance === status).length;

  // const commentsPerPage = 5;
  // const totalPages = Math.ceil(comments.length / commentsPerPage);
  // const currentComments = comments.slice(
  //   (currentPage - 1) * commentsPerPage,
  //   currentPage * commentsPerPage
  // );

  return (
    <div
      style={{
        background: "linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))",
        fontFamily: "'Poppins', sans-serif",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <motion.div
        className="comment-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "1.5rem",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", color: "rgb(23, 98, 173)", marginBottom: "1rem" }}>
          Ucapan &amp; Doa
        </h2>

        <p style={{ fontSize: "0.7rem", color: "rgb(23, 98, 173)", marginBottom: "0rem" }}>
          Berikan ucapan terbaik untuk kedua mempelai
        </p>

        <motion.div
          className="bg-theme-dark mt-4 p-3 shadow rounded-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
              background: 'rgba(135,206,235,0.2)',
              borderRadius: '20px',
              border: '1px solid rgba(135,206,235,0.3)',
              boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
              marginLeft: '0rem',
              marginRight: '0rem',
          }}
          >

          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1.2rem", color: "rgb(23, 98, 173)" }}>
              {comments.length} Komentar
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1rem",
              marginBottom: "1rem",
              marginLeft: "1rem"
            }}
          >
            <div
              style={{
                backgroundColor: "#70d1a0",
                padding: "0.3rem 0.8rem",
                borderRadius: "5px",
                color: "#fff",
                marginRight: '1rem',
                fontSize: '0.8rem',
                width: '100%',
                maxWidth: '100px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <span style={{ fontSize: '1rem' }}>{countAttendance("Hadir")}</span>
              <span style={{ fontSize: '0.45rem' }}>Hadir</span>
            </div>
            <div
              style={{
                backgroundColor: "#f76c6c",
                padding: "0.3rem 0.8rem",
                borderRadius: "5px",
                color: "#fff",
                marginRight: '1rem',
                fontSize: '0.8rem',
                width: '100%',
                maxWidth: '100px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <span style={{ fontSize: '1rem' }}>{countAttendance("Tidak Hadir")}</span>
              <span style={{ fontSize: '0.45rem' }}>Tidak Hadir</span>
            </div>
            <div
              style={{
                backgroundColor: "#f3c623",
                padding: "0.3rem 0.8rem",
                borderRadius: "5px",
                color: "#fff",
                marginRight: '1rem',
                fontSize: '0.8rem',
                width: '100%',
                maxWidth: '100px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <span style={{ fontSize: '1rem' }}>{countAttendance("Masih Ragu")}</span>
              <span style={{ fontSize: '0.45rem' }}>Masih Ragu</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <input
                type="text"
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: "90%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                required
                style={{
                  width: "95%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <option value="" disabled>
                  Konfirmasi Kehadiran
                </option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Masih Ragu">Masih Ragu</option>
              </select>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <textarea
                placeholder="Tulis ucapan Anda"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{
                  width: "90%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: "95%",
                padding: "0.5rem",
                backgroundColor: "rgb(23, 98, 173)",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                position: "relative",
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <span>Kirim</span>
              )}
            </button>
          </form>

          <div style={{ marginTop: "2rem", marginLeft: "0.3rem", marginRight: "0.3rem", marginBottom: "1rem" }}>
            <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
              {comments.length > 0 ? (
                comments.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime))
                  .slice((currentPage - 1) * 5, currentPage * 5)
                  .map((comment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        background: '#fff',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {/* Profile Icon */}
                      <div
                        style={{
                          width: '25px',
                          height: '25px',
                          borderRadius: '50%',
                          backgroundColor: '#007bff',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '12px',
                          marginRight: '0.5rem',
                          marginLeft: '0.3rem',
                          marginTop: '0.3rem'
                        }}
                      >
                        {comment.name.split(' ')[0] ? comment.name.split(' ')[0][0].toUpperCase() : ''} {comment.name.split(' ').length > 1 && comment.name.split(' ')[comment.name.split(' ').length - 1] ? comment.name.split(' ')[comment.name.split(' ').length - 1][0].toUpperCase() : ''}
                      </div>

                      {/* Comment Content */}
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '0.5rem',
                            marginTop: '0.3rem'
                          }}
                        >
                          <strong style={{ fontSize: '16px', color: '#333' }}>
                            {comment.name}
                          </strong>
                          {comment.attendance === 'Hadir' && (
                            <span
                              style={{
                                marginLeft: '8px',
                                backgroundColor: '#4caf50',
                                color: '#fff',
                                fontSize: '12px',
                                borderRadius: '12px',
                                padding: '2px 6px',
                                fontWeight: 'bold',
                              }}
                            >
                              ✔
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: '14px', color: '#555', marginBottom: '0.5rem', textAlign: 'start' }}>
                          {comment.message}
                        </p>
                        <div style={{ fontSize: '12px', color: '#888' }}>
                          {new Date(comment.DateTime).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}{' '}
                          -{' '}
                          {new Date(comment.DateTime).toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    </motion.div>
                  ))) :
                 (
                  <p style={{ textAlign: "center", color: "#6c757d", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Belum ada komentar.</p>
                )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ 
                  padding: "5px 10px", 
                  border: "none", 
                  borderRadius: "20px", 
                  background: "#4682B4", 
                  color: "#ffffff", 
                  cursor: "pointer", 
                  opacity: currentPage <= 1 ? "0.5" : "1", 
                  pointerEvents: currentPage <= 1 ? "none" : "auto" 
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <span>
                {/* Halaman {currentPage} dari {totalPages} */}
                Halaman {currentPage} dari {Math.ceil(comments.length / 5)}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= Math.ceil(comments.length / 5)}
                style={{ 
                  padding: "5px 10px", 
                  border: "none", 
                  borderRadius: "20px", 
                  background: "#4682B4", 
                  color: "#ffffff", 
                  cursor: "pointer", 
                  opacity: currentPage >= Math.ceil(comments.length / 5) ? "0.5" : "1", 
                  pointerEvents: currentPage >= Math.ceil(comments.length / 5) ? "none" : "auto" 
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        
        </motion.div>

      </motion.div>
    </div>
  );
};

export default CommentForm;
