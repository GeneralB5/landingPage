interface FechaConObjeto {
    updated_at: string;
    [key: string]: any;
}

function ordenarFechasPorReciente(fechas: FechaConObjeto[]): FechaConObjeto[] {
    return fechas.sort((a, b) => {
        const fechaA = new Date(a.updated_at);
        const fechaB = new Date(b.updated_at);
        return fechaB.getTime() - fechaA.getTime();
    });
}

export default ordenarFechasPorReciente;