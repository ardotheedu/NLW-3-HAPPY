import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css'
import Leaflet from 'leaflet'

import mapMakerImg from '../images/map-marker.svg'
import api from '../services/api';

const mapIcon = Leaflet.icon({
    iconUrl: mapMakerImg,
    iconSize: [50, 60],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})
interface Orphanage {
    id:number;
    latitude: number;
    longitude: number;
    name: string;
}
function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    // Orphanages é a variavel e setOrphanages é o responsavel por atualizar essa variavel
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, [])
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy Logo"/>

                    <h2>Escolha um ofarnato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Petrolina</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>
            <Map
                center={[-9.372775,-40.5800898]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                            key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>
             
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            
            </Link>
        </div>
    )
}


export default OrphanagesMap;