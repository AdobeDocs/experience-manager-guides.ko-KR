---
title: AEM Guides as a Cloud Service 마이크로서비스를 위한 새로운 게시 기반 구성
description: AEM Guides에 대한 새로운 마이크로서비스 기반 게시를 구성하는 방법에 대해 알아봅니다.
exl-id: 92e3091d-6337-4dc6-9609-12b1503684cd
feature: Microservice in AEM Guides
role: User, Admin
source-git-commit: f929d4fd74e98e2025d80c14dbef6aeb464c0dd5
workflow-type: tm+mt
source-wordcount: '711'
ht-degree: 0%

---

# JWT 인증을 사용하여 마이크로서비스 기반 게시 구성

[!BADGE Cloud Service]{type=Informative}

>[!NOTE]
>
> JWT(서비스 계정) 자격 증명은 OAuth 서버 간 자격 증명을 위해 더 이상 사용되지 않습니다. 서비스 계정(JWT) 자격 증명을 사용하는 응용 프로그램은 2025년 1월 1일 이후에 작동을 중지합니다. 애플리케이션이 계속 작동하도록 하려면 2025년 1월 1일까지 새 자격 증명으로 마이그레이션해야 합니다. [서비스 계정(JWT) 자격 증명에서 OAuth 서버 간 자격 증명으로 마이그레이션](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/)에 대해 자세히 알아보십시오.



Adobe Experience Manager Guidesas a Cloud Service 용 의 Microservice 기반 게시는 PDF(기본 DITA-OT 기반 모두), HTML 5, JSON 및 사용자 지정 유형의 출력 사전 설정을 지원합니다.

JWT(서비스 계정) 자격 증명은 더 이상 사용되지 않으므로 Adobe IMS OAuth 기반 인증을 사용하는 것이 좋습니다. [OAuth 인증을 통해 마이크로서비스 기반 게시를 구성](configure-microservices-imt-config.md)하는 방법에 대해 알아봅니다.

Adobe IMS JWT 기반 인증으로 보호되는 클라우드 게시 서비스의 경우 고객은 아래의 단계에 따라 환경을 Adobe의 보안 토큰 기반 인증 워크플로와 통합하고 새로운 클라우드 기반의 확장 가능한 게시 솔루션을 사용해야 합니다.


## Adobe Developer Console에서 IMS 구성 만들기

**혼동을 만드는 데 필요한 역할**: 시스템 관리자

Adobe Developer Console에서 IMS 구성을 만들려면 다음 단계를 수행하십시오.

1. Developer Console 열기: `https://developer.adobe.com/console`.

1. 맨 위에서 **프로젝트** 탭으로 전환합니다.

   <img src="assets/projects-tab.png" alt="프로젝트 탭" width="500">

1. 새 빈 프로젝트를 만들려면 **새 프로젝트 만들기** 드롭다운에서 **빈 프로젝트**&#x200B;을(를) 선택하십시오.

   <img src="assets/create-new-project.png" alt="새 프로젝트 만들기" width="500">

1. **프로젝트에 추가** 드롭다운에서 **API**&#x200B;을(를) 선택하여 프로젝트에 IO Management API를 추가하십시오.

   <img src="assets/add-project.png" alt="프로젝트 추가" width="300">

   <img src="assets/io-management-api.png" alt="io 관리" width="500">

1. API를 추가하는 동안 새 개인/공개 키 쌍을 만듭니다. 이렇게 하면 시스템에 개인 키가 자동으로 다운로드됩니다.

   <img src="assets/generate-key-pair.png" alt="키 쌍 생성" width="500">

1. 구성된 API를 저장합니다.

   <img src="assets/save-api.png" alt="api 저장" width="600">

1. **프로젝트** 탭으로 돌아가서 왼쪽의 **프로젝트 개요**&#x200B;를 클릭합니다.

   <img src="assets/project-overview.png" alt="프로젝트 개요" width="500">

1. 서비스 JSON을 다운로드하려면 맨 위에 있는 **다운로드** 단추를 클릭하십시오.

   <img src="assets/download-json.png" alt="json 다운로드" width="500">

이제 JWT 인증 세부 사항을 구성했으며 개인 키 및 서비스 세부 사항 JSON도 다운로드했습니다. 다음 섹션에서 이 두 파일을 필요로 하므로 이 두 파일을 가까이에 두십시오.

### 환경에 IMS 구성 추가

다음 단계를 수행하여 환경에 IMS 구성을 추가합니다.

1. Experience manager를 열고 구성할 환경이 포함된 프로그램을 선택합니다.
1. **환경** 탭으로 전환합니다.
1. 구성할 환경 이름을 클릭합니다. 환경 정보 페이지로 이동합니다.
1. **구성** 탭으로 전환합니다.
1. 아래 스크린샷과 같이 개인 키 및 프로젝트 JSON을 업로드합니다. 아래에 강조 표시된 것과 동일한 이름 및 구성을 사용하고 있는지 확인하십시오.

   <img src="assets/ims-config-environment.png" alt="ims 구성" width="500">

>[!NOTE]
>
> 위 스크린샷과 같이 개인 키 및 서비스 세부 사항 JSON 파일의 컨텐츠를 열고 복사한 다음 구성 패널의 값 열에 붙여넣어야 합니다.

환경에 IMS 구성을 추가했으면 다음 단계를 수행하여 OSGi를 사용하여 이러한 속성을 Experience Manager Guides과 연결합니다.

1. Cloud Manager Git 프로젝트 코드에서 아래에 지정된 두 개의 파일을 추가합니다(파일 내용의 경우 [부록](#appendix) 참조).

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`
   * `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`
1. 새로 추가된 파일에 `filter.xml`이(가) 적용되는지 확인하십시오.
1. Git 변경 사항을 커밋하고 푸시합니다.
1. 파이프라인을 실행하여 환경에 변경 사항을 적용합니다.

이 작업이 완료되면 새로운 마이크로서비스 기반 클라우드 게시를 사용할 수 있습니다.

## FAQ

1. 하나의 키를 여러 클라우드 환경에서 사용할 수 있습니까?
   * 예. 하나의 개인 키를 생성하여 모든 환경에 사용할 수 있지만 모든 환경에 대해 환경 변수를 구성하고 동일한 키를 사용해야 합니다.
1. 마이크로서비스를 사용하기 위한 OSGi 구성이 활성화된 경우 게시 프로세스가 동일한 코드베이스를 사용하는 로컬 AEM 서버에서 작동합니까?
   * `dxml.use.publish.microservice` 플래그가 `true`(으)로 설정되어 있으면 항상 마이크로서비스 구성을 찾습니다. 로컬에서 게시할 수 있도록 `dxml.use.publish.microservice`을(를) `false`(으)로 설정합니다.
1. 마이크로서비스 기반 게시를 사용할 때 DITA 프로세스에 할당되는 메모리는 얼마입니까? DITA 프로파일 개체 매개변수를 통해 제어됩니까?
   * 마이크로서비스 기반 게시를 사용하면 DITA 프로파일 개체 매개 변수를 통해 메모리 할당이 제어되지 않습니다. 서비스 컨테이너에서 사용할 수 있는 총 메모리는 8GB이며, 이 중 6GB는 DITA-OT 프로세스에 할당됩니다.


## 부록 {#appendix}

**파일**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**컨텐츠**:

```
{
  "service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
  "private.key": "$[secret:PRIVATE_KEY]"
}
```

**파일**: `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`

**컨텐츠**:
* `dxml.use.publish.microservice`: DITA-OT를 사용하여 마이크로서비스 기반 게시를 사용하도록 전환
* `dxml.use.publish.microservice.native.pdf`: 마이크로서비스 기반 네이티브 PDF 게시를 사용하도록 전환

```
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          jcr:primaryType="sling:OsgiConfig"
          dxml.publish.microservice.url="https://adobeioruntime.net/api/v1/web/543112-guidespublisher/default/publishercaller.json"
          dxml.use.publish.microservice="{Boolean}true"
          dxml.use.publish.microservice.native.pdf="{Boolean}true"
/>
```
