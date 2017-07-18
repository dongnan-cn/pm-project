import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import "dhtmlx-gantt";
import { TaskService } from "../services/task.service";
import { LinkService } from "../services/link.service";
import { } from "@types/dhtmlxgantt";

@Component({
    selector: "gantt",
    styles: [
        `
        :host{
            display: block;
            height: 600px;
            position: relative;
            width: 100%;
        }
    `],
    providers: [TaskService, LinkService],
    templateUrl: "./gantt.component.html",
})
export class GanttComponent implements OnInit {
    @ViewChild("gantt_here") ganttContainer: ElementRef;
    private ganttData;
    private ganttLinks;

    constructor(private taskService: TaskService, private linkService: LinkService) {
    }

    ngOnInit() {
        gantt.config.xml_date = "%Y-%m-%d %H:%i";

        gantt.init(this.ganttContainer.nativeElement);

        Promise.all([this.taskService.get(), this.linkService.get()])
            .then(([data, links]) => {
                gantt.parse({ data, links });
            });
    }


    // save() {
    //     this.taskService.save();
    // }
}
