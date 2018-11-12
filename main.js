var image = document.getElementById('theImage').addEventListener('click', changeImage);

var count = 0
function changeImage() {
    if (count % 2 == 0) {
        document.getElementById('theImage').src = "/assets/images/js-photo-1.jpeg";
        count++
        console.log(count)
    } else {
        document.getElementById('theImage').src = "/assets/images/js-2-photo.jpeg";
        count++
    }
}