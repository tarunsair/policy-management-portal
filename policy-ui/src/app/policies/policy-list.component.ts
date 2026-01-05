import { Component, OnInit } from '@angular/core';
import { PolicyService } from './policy.service';
import { Policy } from './policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html'
})
export class PolicyListComponent implements OnInit {

  policies: Policy[] = [];
  searchText: string = '';

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies() {
    this.policyService.getPolicies().subscribe((data: any) => {
      this.policies = data;
    });
  }

  filterPolicies() {
    return this.policies.filter(p =>
      p.policyNumber.includes(this.searchText) ||
      p.customerName.includes(this.searchText)
    );
  }
}
