import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = "http://localhost:3000/api/bikeModels";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) {
  }

  getModels(): Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

  addModel(modelName: string, modelPrice: number, categoryId: number): Observable<any> {
    return this.http.post(`${baseUrl}/model`, {modelName: modelName, price: modelPrice, categoryId: categoryId});
  }

  deleteModel(modelId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/model/${modelId}`);
  }

  updateModel(modelId: number, modelName: string, modelPrice: number, categoryId: number): Observable<any> {
    return this.http.put(`${baseUrl}/model/${modelId}`, {
      modelName: modelName,
      price: modelPrice,
      categoryId: categoryId
    });
  }

}
