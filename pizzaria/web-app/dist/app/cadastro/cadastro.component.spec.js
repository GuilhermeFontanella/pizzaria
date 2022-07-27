import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { CadastroComponent } from './cadastro.component';
import { CadastroService } from './cadastro.service';
describe('CadastroComponent', () => {
    let component;
    let cadastroService;
    let fixture;
    let service;
    let novoUsuario = {
        id: 1,
        nome: 'Fulano',
        sobrenome: 'Ciclano',
        nascimento: '01/01/2000',
        celular: '9999999999',
        email: 'fulano@email.com',
        usuario: 'fulano_01',
        senha: '12345'
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CadastroComponent],
            imports: [
                CardModule,
                InputTextModule,
                FormsModule,
                ReactiveFormsModule,
                InputMaskModule,
                PasswordModule,
                ButtonModule,
                RippleModule,
                HttpClientModule
            ],
            providers: [CadastroService]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CadastroComponent);
        service = TestBed.createComponent(CadastroService);
        component = fixture.componentInstance;
        cadastroService = service.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should signUp a new user - cadastrar()', () => {
        component.novoUsuario = novoUsuario;
        component.cadastrar();
        expect(component.novoUsuario).toEqual(novoUsuario);
    });
});
//# sourceMappingURL=cadastro.component.spec.js.map