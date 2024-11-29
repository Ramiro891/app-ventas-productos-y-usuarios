import BorrarVenta from "@/components/borrarVenta";
import axios from "axios";
import Link from "next/link";

async function getVentas() {
    const url = "http://localhost:3000/ventas";
    const ventas = await axios.get(url);
    return ventas.data;
}

export default async function Ventas() {
    const ventas = await getVentas();

    const tabEncabezado = {
        padding: '10px',
        border: '1px solid #ccc',
        textAlign: 'left',
        fontWeight: 'bold',
        backgroundColor: '#007bff', // Azul para los encabezados
        color: '#fff'
    };

    const tabstyle2 = {
        padding: '10px',
        border: '1px solid #ccc',
    };

    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Ventas</h1>
            <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={tabEncabezado}>Id</th>
                        <th style={tabEncabezado}>Cantidad</th>
                        <th style={tabEncabezado}>Estado</th>
                        <th style={tabEncabezado}>Fecha/Hora</th>
                        <th style={tabEncabezado}>Id Producto</th>
                        <th style={tabEncabezado}>Id Usuario</th>
                        <th style={tabEncabezado}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta, i) => (
                        <tr key={i} style={i % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#ffffff' }}>
                            <td style={tabstyle2}>{i + 1}</td>
                            <td style={tabstyle2}>{venta.cantidad}</td>
                            <td style={tabstyle2}>{venta.estado}</td>
                            <td style={tabstyle2}>{venta.fechayhora}</td>
                            <td style={tabstyle2}>{venta.id_producto}</td>
                            <td style={tabstyle2}>{venta.id_usuario}</td>
                            <td style={tabstyle2}>
                                <BorrarVenta id={venta.id} />
                                <> / </>
                                <Link href={`/ventas/modificar/${encodeURIComponent(JSON.stringify({ id: venta.id, cantidad: venta.cantidad }))}`} style={linkStyle}>
                                    Modificar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <Link href="/ventas/nuevo" style={newButtonStyle}>Nueva Venta</Link>
            </div>
        </>
    );
}

// Estilos para el botón de nueva venta
const newButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff', // Azul
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
};

// Estilo para el enlace de "Modificar"
const linkStyle = {
    color: '#007bff', // Azul
    textDecoration: 'none',
    fontWeight: 'bold',
};
