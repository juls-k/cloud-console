# CloudConsole

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

***

### 프로젝트 구성
![image](https://user-images.githubusercontent.com/80272087/111505859-67b4b780-878c-11eb-9701-037455e841e1.png)  


app/layout/sidebar - 좌측 메뉴  
app/main/content/head - 컨텐츠 제목  
app/main/content/pages/compute, .../kubernetes - compute 메뉴, kubernetes 메뉴 페이지 컴포넌트  

Content Module lazy loading

### 화면
![main](https://user-images.githubusercontent.com/80272087/111505571-1c020e00-878c-11eb-9d1c-716d9d2e1c07.png)  
Sidebar에서 제목 클릭으로 각 메뉴 페이지로 이동합니다.  
페이지 이동 시 Sidebar 및 Content Header는 같은 컴포넌트를 사용하며 Content 컴포넌트만 변경됩니다.  

### Responsive
![image](https://user-images.githubusercontent.com/80272087/111507572-258c7580-878e-11eb-97b6-ef48b5ed075e.png)
Sidebar는 가로 768px 이상 해상도에서 활성화됩니다.
