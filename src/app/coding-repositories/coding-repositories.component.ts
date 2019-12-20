import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-coding-repositories",
  templateUrl: "./coding-repositories.component.html",
  styleUrls: ["./coding-repositories.component.css"]
})
export class CodingRepositoriesComponent implements OnInit {
  githubItems = [
    {
      title: "curl_modifier",
      url: "https://github.com/Zenulous/curl_modifier",
      imageurl:
        "https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/Powershell_256.png",
      description:
        "A module to automatically modify, execute and repeat cURL requests"
    },
    {
      title: "Uninstall-Modules",
      url: "https://github.com/Zenulous/Uninstall-Modules",
      imageurl:
        "https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/Powershell_256.png",
      description:
        "PowerShell module to simplify uninstalling a batch of PowerShell modules by using glob patterns. https://www.powershellgallery.com/packages/Uninstall-Modules/0.1.0"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
