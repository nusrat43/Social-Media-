// ----------- swiper story ------------- 
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5,
});

// ---------- window scroll ------------

window.addEventListener('scroll',() =>{
    document.querySelector('.pro-popun').style.display= 'none'
    document.querySelector('.add-post-popun').style.display = 'none'
})

// ------------ profile popun ----------------

document.querySelectorAll('#my-pro-pics').forEach(AllProfile => {
    AllProfile.addEventListener('click', () => {
        document.querySelector('.pro-popun').style.display = 'flex';
    });
});

// Agar multiple .close elements hain:
document.querySelectorAll('.close').forEach(AllCloser => {
    AllCloser.addEventListener('click', () => {
        document.querySelectorAll('.pro-popun').forEach(proPopun => {
            proPopun.style.display = 'none';
        });
        document.querySelectorAll('.add-post-popun').forEach(postPopun => {
            postPopun.style.display = 'none';
        });
    });
});


document.querySelector('#profile-uploade').addEventListener('change',() => {
    document.querySelectorAll('#my-pro-pics img').forEach(allMyProfileImg => {
        allMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-uploade').files[0])
    })
})




// ---------------------- add post popun ------------- ---------


// document.querySelector('#post-pic-upload').addEventListener('change',() => {
//     document.querySelector('#create-lg img').src = URL.createObjectURL(document.querySelector('#post-pic-upload').files[0])
//     })

document.querySelector('#post-pic-upload').addEventListener('change', () => {
    const file = document.querySelector('#post-pic-upload').files[0];
    if (file) {
        document.querySelector('#create-lg img').src = URL.createObjectURL(file);
    }
});


function hidePopups() {
    document.querySelectorAll('.pro-popun').forEach(proPopun => {
        proPopun.style.display = 'none';
    });
    document.querySelectorAll('.add-post-popun').forEach(postPopun => {
        postPopun.style.display = 'none';
    });
}

// ------------------------- add story ----------------------

document.querySelector('#add-story').addEventListener('change', () => {
    document.querySelector(".story img").src = URL.createObjectURL(document.querySelector('#add-story').files[0]);
    document.querySelector('.add-story').style.display = 'none' 
})

// -------------------- higlight post input ---------------


document.querySelector('.mini-btn').addEventListener('click', () => {
    document.querySelector('.input-post').classList.add('boxshadow'); 
    setTimeout(() => {
        document.querySelector('.input-post').classList.remove('boxshadow');
    }, 2000);
});

   
document.querySelectorAll('.action-button span:first-child i').forEach(liked => {
    liked.addEventListener('click', () => {
        liked.classList.toggle('liked');
    });
});