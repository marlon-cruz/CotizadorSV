import "./caracteristicas.css";
import ListCaracteristicas from "../listCaracteristicas/listCaracteristicas";
import { useState, useEffect } from "react";

function Caracteristicas({
    listPriduct = null
}) {

   let product = listPriduct != null? listPriduct:   [
    {
      id: 1,
      nombre: "Laptop",
      precio: 850.50,
      marca: "Dell",
      stock: 10,
     
    },
    {
      codigo: "P-002",
      titulo: "Mouse inalámbrico",
      costo: 25,
      color: "Negro",
      disponible: true,
    },
    {
      uid: "abc123",
      producto: "Teclado mecánico",
      valor: 70,
      switch: "Red",
      rgb: true,
    },
    {
      id_producto: 4,
      descripcion: "Monitor 24 pulgadas",
      precio_usd: 150,
      resolucion: "1080p",
      hz: 75,
    },
    {
      ref: "X5",
      name: "Audífonos",
      price: 45,
      wireless: true,
      battery_hours: 20,
    },
    {
      uid: "abc123",
      producto: "Teclado mecánico",
      valor: 70,
      switch: "Red",
      rgb: true,
    },
    {
      id_producto: 4,
      descripcion: "Monitor 24 pulgadas",
      precio_usd: 150,
      resolucion: "1080p",
      hz: 75,
    },
    {
      ref: "X5",
      name: "Audífonos",
      price: 45,
      wireless: true,
      battery_hours: 20,
    },
  ];

  return (
    <div className="productCard">
      {product.map((producto, index) => (
        <ListCaracteristicas key={index} product={producto} />
      ))}
    </div>
  );
}

export default Caracteristicas;
