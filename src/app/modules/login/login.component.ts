import {UserComponent} from '@modules/main/header/user/user.component';
import {ApiService} from './../../services/api.service';
import {ElementRef, Input} from '@angular/core';
import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    HostBinding
} from '@angular/core';
import {Router} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
    UntypedFormGroup,
    UntypedFormControl,
    Validators,
    FormsModule,
    NgModel,
    FormBuilder,
    FormGroup,
    FormControl
} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
// import {HTMLInputELement} from '@angular/forms';
// import {ViewChild, AfterViewInit } from '@angular/core';
import {ViewChild, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    formGroup: FormGroup;

    constructor(
        private router: Router,
        private ApiService: ApiService,
        private renderer: Renderer2,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            
            username: new FormControl('', [Validators.required, Validators.minLength(6)]),
                
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
        
        this.formGroup = this.fb.group({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }
    
    onLogin() {
    
        const loginApi: string =
            'https://hcp-api-stg.genesolutions.vn/api/HCP/Login';
        debugger;
        const val = this.formGroup.value;
        // const loginObj: any = {
        //     username: 'doctor2',
        //     password: 'P@ssw0rd'
        // };
        this.ApiService.getData(loginApi).subscribe((data: any) => {
            return this.ApiService.getData(loginApi);
        });

        this.ApiService.login(val).subscribe((data: any) => {
            console.log(data);
            if (data.StatusCode == 200) {
                // alert('Login Success');
                this.router.navigateByUrl('homepage');
            } else {
                console.log(this.formGroup.value);
            }
        });
        // if(this.loginObj.userName == 'vivianisawesome' && this.loginObj.password == 'admin'){
        //   this.router.navigateByUrl('homepage')

        // }else{
        //   alert('Login Failed');
        // }
    }


//     @HostBinding('class') class = 'login-box';
//     public loginForm: UntypedFormGroup;
//     public isAuthLoading = false;
//     public isGoogleLoading = false;
//     public isFacebookLoading = false;

//     constructor(
//         private renderer: Renderer2,
//         private toastr: ToastrService,
//         private appService: AppService
//     ) {}

//     ngOnInit() {
//         this.renderer.addClass(
//             document.querySelector('app-root'),
//             'login-page'
//         );
//         this.loginForm = new UntypedFormGroup({
//             email: new UntypedFormControl(null, Validators.required),
//             password: new UntypedFormControl(null, Validators.required)
//         });
//     }

//     async loginByAuth() {
//         if (this.loginForm.valid) {
//             this.isAuthLoading = true;
//             await this.appService.loginWithEmail(
//                 this.loginForm.value.email,
//                 this.loginForm.value.password
//             );

//             this.isAuthLoading = false;
//         } else {
//             this.toastr.error('Form is not valid!');
//         }
//     }

//     async loginByGoogle() {
//         this.isGoogleLoading = true;
//         await this.appService.signInByGoogle();
//         this.isGoogleLoading = false;
//     }

//     ngOnDestroy() {
//         this.renderer.removeClass(
//             document.querySelector('app-root'),
//             'login-page'
//         );
//     }
// }
}