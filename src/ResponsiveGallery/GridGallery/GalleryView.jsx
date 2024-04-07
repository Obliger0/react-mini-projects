import "./galleryView.css"

export function GalleryView({image=[]}) {

    return (
        <div className="gallery-container">
            {
                image.map((obj)=>{
                    return(<div className="img-card">
                        <img src={obj.url} alt="img"/>
                    </div>)
                })
            }
        </div>
    )
}