import React, { useState, useEffect } from 'react'
import Viewer from 'react-viewer'
import { StrapiGetMedia } from '../utils/strapi/assets'

import AOS from 'aos';

function Albums({ albums }) {
    const [list, setList] = useState([...albums])

    function toggleGallery(visible, albumIndex, picIndex) {
        const newList = [...list]        
        newList[albumIndex].activeIndex = picIndex || 0
        newList[albumIndex].visible = !visible
        setList(newList)
    }

    useEffect(() => {
        AOS.init()
    }, [])

    if (!albums?.length) {
        return null
    }

    return albums.map((album, albumIndex) => {
        return (
            <li className="album" key={album.id}>
                <div className="columns">
                    {album.images.map((pic, picIndex) => (
                        <div 
                            key={pic.id} 
                            className="column is-4"                             
                            >
                            <figure 
                                className="image is-4by3" 
                                data-aos="fade-up"
                                data-aos-delay={200 * (picIndex + 1)}
                                onClick={() => toggleGallery(album.visible, albumIndex, picIndex)}
                            >
                                <img
                                    className="image"
                                    src={StrapiGetMedia(pic?.formats?.small?.url)}
                                />
                            </figure>
                        </div>
                    ))}
                </div>
                <Viewer
                    visible={album?.visible}
                    activeIndex={album.activeIndex}
                    onClose={() => toggleGallery(album.visible, albumIndex)}
                    onMaskClick={() => toggleGallery(album.visible, albumIndex)}
                    rotatable={false}
                    scalable={false}
                    noNavbar={true}
                    images={album?.images?.map((pic) => {
                        return {
                            src: StrapiGetMedia(pic?.formats?.large?.url),
                            alt: pic?.name
                        }
                    })}
                />
            </li>
        )
    })
}

export default Albums