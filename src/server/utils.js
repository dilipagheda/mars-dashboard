const transformPhotos = (photos) => photos.map(photo => {
    return {
        src: photo.img_src,
        camera: photo.camera.full_name
    }
})

module.exports = transformPhotos