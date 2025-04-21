import { Component, inject, OnInit } from '@angular/core'
import { SupabaseService } from './supabase/supabase.service'
import { AccountComponent } from "./account/account.component";
import { AuthComponent } from "./auth/auth.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AccountComponent, AuthComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'angular-user-management'
    private readonly supabase = inject(SupabaseService)
    public session = this.supabase.session

    ngOnInit() {
        this.supabase.authChanges((_, session) => (this.session = session))
    }
}
