function playVideo() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'flex';
    iframe.src = "https://www.youtube.com/embed/8n2jvdRHBAk?si=7Exy7gc4L1sPrJmx"; // Thêm autoplay
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    iframe.src = ''; 
}
