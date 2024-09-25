import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import { SidebarMenuItemComponent } from '@components/index';

@Component({
	selector: 'app-dashboard-layout',
	standalone: true,
	imports: [CommonModule, RouterModule, SidebarMenuItemComponent],
	templateUrl: './dashboard-layout.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
	public routes = routes[0].children?.filter((route) => route.data);
}
