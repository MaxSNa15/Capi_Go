import {api, headerAPI} from "../configs/axios";
import {IPerson} from "../interfaces/Person";

export class PersonService {
    private apiURL = "v1/persons";

    public async getAll() {
        try{
            console.log("Consultar todos los registros");
            const response = await api.get<IPerson[]>(`${this.apiURL}`);
            return await response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    public async post(data: IPerson) {
        try{
            console.log("Crear un registro");
            const response = await api.post<IPerson>(`${this.apiURL}`, data, headerAPI);
            return await response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    public async getById(id: number) {
        try{
            console.log("Consultar un registro por id");
            const response = await api.get<IPerson>(`${this.apiURL}/${id}`, headerAPI);
            const data: IPerson = response.data; 
            return data;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    public async put(data: IPerson) {
        try{
            console.log("Actualizar un registro");
            const response = await api.put<IPerson>(`${this.apiURL}/${data.id}`, data, headerAPI);
            return await response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    public async delete(data: IPerson) {
        try{
            console.log("Eliminar un registro");
            const response = await api.delete<IPerson>(`${this.apiURL}/${data.id}`, headerAPI);
            return await response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}