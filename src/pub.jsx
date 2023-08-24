import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from './styles.module.css';


export default function Pub() {
    const { id } = useParams();

    return (
        <>
            <h3> Ou ap li Pibliksyon {id} </h3>
            <p>Klike sou <Link to="/piblikasyon"> lyen sa </Link> pou w tounen nan piblikasyon yo</p>
        </>
    );
}
