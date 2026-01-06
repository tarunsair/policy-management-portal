import { Component, OnInit } from '@angular/core';
import { PolicyService } from './policy.service';
import { Policy } from './policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html'
})
export class PolicyListComponent implements OnInit {

  policies: Policy[] = [];
  filteredPolicies: Policy[] = [];
  searchText: string = '';

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.loadPolicies();
  }

  loading = false;
errorMessage = '';


loadPolicies(): void {
  this.loading = true;
  this.errorMessage = '';

  this.policyService.getPolicies().subscribe({
    next: (data) => {
      this.policies = data;
      this.filteredPolicies = data;
      this.loading = false;
    },
    error: (error) => {
      this.errorMessage = error.message;
      this.loading = false;
    }
  });
}

  onSearchChange(): void {
    const text = this.searchText?.toLowerCase() || '';

    this.filteredPolicies = this.policies.filter(p =>
      p.policyNumber.toLowerCase().includes(text) ||
      p.customerName.toLowerCase().includes(text)
    );
  }
}
