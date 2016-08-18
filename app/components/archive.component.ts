import { Component } from '@angular/core';

@Component({
    selector: 'archive',
    templateUrl: "app/templates/archive.component.html",
    styleUrls: ["app/styles/archive.component.css"]
})
export class ArchiveComponent {
    public data: IArchiveData = {};
    public dataList: IArchiveData[] = [];
    
    public onSubmit() {
        this.dataList.push(this.data)
        this.data = {};
    }
}

interface IArchiveData {
    authur?: string;
    date?: string;
    title?: string;
    quote?: string;
}