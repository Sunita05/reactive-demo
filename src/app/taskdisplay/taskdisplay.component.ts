import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Task } from './task';
import { TaskdataService } from './taskdata.service';
@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
  arr: Task[] = [];
  name: string = "watch";
  constructor(private _data: TaskdataService,private _router:Router) {}

  ngOnInit() {
    this._data.getAllTasks().subscribe(
      (data: Task[]) => {
        this.arr = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  onTaskDelete(item: Task) {
    this._data.deleteTask(item.Id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
      this._router.navigate(['/edittask',item.Id]);
    });
  }
  onTaskEdit(item:Task){
    this._router.navigate(['/edittask',item.Id]);
  }
  onSideBarClick(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
    } else {
      this._data.getAllTasks().subscribe(
        (data: Task[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
  search(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
    } else {
      this._data.getAllTasks().subscribe(
        (data: Task[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
}
