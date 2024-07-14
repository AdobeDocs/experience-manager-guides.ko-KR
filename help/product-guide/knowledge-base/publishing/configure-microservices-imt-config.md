---
title: AEM Guidesas a Cloud Service 에 대한 OAuth 인증을 통해 마이크로서비스 기반 게시 구성
description: AEM Guides에 대한 OAuth 인증을 통해 마이크로서비스 기반 게시를 구성하는 방법에 대해 알아봅니다.
feature: Microservice in AEM Guides
role: Admin
exl-id: db0c83c7-1ece-4010-b214-f8d806d26bc9
source-git-commit: c51a372dc44921a489219f5ac99e3ad180ccc91d
workflow-type: tm+mt
source-wordcount: '827'
ht-degree: 0%

---

# OAuth 인증을 통해 마이크로서비스 기반 게시 구성

게시 서비스를 사용하면 Experience Manager Guides as a Cloud Service 마이크로에서 동시에 게시 워크로드를 실행하고 업계 최고의 Adobe I/O Runtime 서버리스 플랫폼을 활용할 수 있습니다.

각 게시 요청에 대해 Experience Manager Guidesas a Cloud Service 는 사용자 요청에 따라 가로로 확장되는 별도의 컨테이너를 실행합니다. 이렇게 하면 여러 게시 요청을 실행하고 대형 On-Premise Adobe Experience Manager 서버보다 더 나은 성능을 얻을 수 있는 기능을 제공합니다.

>[!NOTE]
>
> Experience Manager Guides의 마이크로서비스 기반 게시는 PDF(기본 및 DITA-OT 기반 모두), HTML 5, JSON 및 사용자 지정 유형의 출력 사전 설정을 지원합니다.

클라우드 게시 서비스는 Adobe IMS OAuth 기반 인증을 통해 보호되므로 다음 단계를 수행하여 환경을 Adobe의 보안 토큰 기반 인증 워크플로와 통합하고 클라우드 기반의 확장 가능한 게시 솔루션을 사용하십시오.


## Adobe Developer Console에서 IMS 구성 만들기

**구성을 만드는 데 필요한 역할**: 시스템 관리자

**Adobe Developer Console**&#x200B;에서 IMS 구성을 만들려면 다음 단계를 수행하십시오.

>[!NOTE]
>
>작성을 위해 AI 기반 스마트 제안을 구성하는 OAuth 프로젝트를 이미 만든 경우 다음 단계를 건너뛰고 프로젝트를 만들 수 있습니다.

1. **Developer Console** 열기: `https://developer.adobe.com/console`.

1. 맨 위에서 **프로젝트** 탭으로 전환합니다.

   <img src="assets/projects-tab.png" alt="프로젝트 탭" width="500">

   ***Adobe Developer Console***에서**&#x200B;프로젝트&#x200B;**탭을 선택합니다.

1. 새 빈 프로젝트를 만들려면 **새 프로젝트 만들기** 드롭다운에서 **빈 프로젝트**&#x200B;을(를) 선택하십시오.

   <img src="assets/create-new-project.png" alt="새 프로젝트 만들기" width="500">

   *빈 프로젝트를 새로 만듭니다.*

1. **프로젝트에 추가** 드롭다운에서 **API**&#x200B;을(를) 선택하여 프로젝트에 IO Management API를 추가하십시오.

   <img src="assets/add-project.png" alt="프로젝트 추가" width="300">

   *드롭다운에서 API 프로젝트를 선택합니다.*

   <img src="assets/io-management-api.png" alt="io 관리" width="500">

   *I/O 관리 API를 프로젝트에 추가합니다.*

1. 새 OAuth 자격 증명을 만들고 저장합니다.

   <img src="assets/microservice-api-oauth.png" alt="키 쌍 생성" width="500">

   *API에 대한 OAuth 자격 증명을 구성합니다.*


1. **프로젝트** 탭으로 돌아가서 왼쪽의 **프로젝트 개요**&#x200B;를 선택하십시오.

   <img src="assets/project-overview.png" alt="프로젝트 개요" width="500">

   *새 프로젝트를 시작합니다.*

1. 서비스 JSON을 다운로드하려면 맨 위에 있는 **다운로드** 단추를 클릭하십시오.

   <img src="assets/download-json.png" alt="json 다운로드" width="500">

   *JSON 서비스 세부 정보를 다운로드합니다.*

OAuth 인증 세부 사항을 구성하고 JSON 서비스 세부 사항을 다운로드했습니다. 다음 섹션에서 이 파일을 필요로 하므로 이 파일을 가까이에 두십시오.


## 환경에 IMS 구성 추가

>[!NOTE]
>
>스마트 제안에 대한 OAuth 프로젝트를 이미 만든 경우 마이크로서비스에 대해 동일한 프로젝트를 재사용하고 다음 단계를 건너뛰어 환경에 IMS 구성을 추가할 수 있습니다.

### 기존 구성 업데이트(JWT   to OAuth shift )

JWT(더 이상 사용되지 않음)를 사용하여 게시하기 위해 마이크로 서비스를 이미 사용 중인 경우 다음 단계를 수행하여 구성을 업데이트합니다.



1. **Experience Manager**&#x200B;을 열고 구성할 환경이 포함된 프로그램을 선택하십시오.
1. **환경** 탭으로 전환합니다.
1. 구성할 환경의 이름을 선택합니다. **환경 정보** 페이지로 이동해야 합니다.
1. **구성** 탭으로 전환합니다.

1. 다운로드한 새 OAuth JSON 파일로 SERVICE_ACCOUNT_DETAILS JSON 필드를 업데이트합니다.
1. PRIVATE_KEY 필드를 삭제합니다.



   <img src="assets/ims-service-account-config.png" alt="ims 서비스 계정 구성" width="500">

   *기존 JWT 환경 구성을 업데이트합니다.*

### 최초 구성

게시 마이크로서비스를 처음 사용하려면 다음 단계에 따라 구성을 업데이트하십시오.
1. **Experience Manager**&#x200B;을 열고 구성할 환경이 포함된 프로그램을 선택하십시오.
1. **환경** 탭으로 전환합니다.
1. 구성할 환경의 이름을 선택합니다. **환경 정보** 페이지로 이동해야 합니다.
1. **구성** 탭으로 전환합니다.

1. SERVICE_ACCOUNT_DETAILS라는 새 구성을 만듭니다. 값에서 개발자 콘솔에서 다운로드한 OAuth JSON 파일의 컨텐츠를 추가합니다.


<img src="assets/jws-service-account-config.png" alt="ims 서비스 계정 구성" width="500">

*환경을 처음 구성하십시오.*


### 마이크로서비스 기반 게시 활성화를 위한 최초 코드 변경

>[!NOTE]
>
> 이미 마이크로서비스 기반 게시를 사용하고 있는 경우 다음 단계를 건너뜁니다.

환경에 IMS 구성을 추가했으면 다음 단계를 수행하여 OSGi를 사용하여 이러한 속성을 Experience Manager Guides과 연결합니다.

1. Cloud Manager Git 프로젝트 코드에서 `/apps/fmditaCustom/config`에 다음 두 파일을 추가합니다(파일 내용의 경우 [부록](#appendix) 보기).

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`
   * `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`
1. 새로 추가된 파일에 `filter.xml`이(가) 적용되는지 확인하십시오.
1. Git 변경 사항을 커밋하고 푸시합니다.
1. 파이프라인을 실행하여 환경에 변경 사항을 적용합니다.

이 작업이 완료되면 마이크로서비스 기반 클라우드 게시를 사용할 수 있습니다.

## FAQ


1. 마이크로서비스를 사용하기 위한 OSGi 구성이 활성화된 경우 게시 프로세스가 동일한 코드베이스를 사용하는 로컬 Experience Manager 서버에서 작동합니까?
   * `dxml.use.publish.microservice` 플래그가 `true`(으)로 설정되어 있으면 항상 마이크로서비스 구성을 찾습니다. 로컬 서버에서 게시할 수 있도록 `dxml.use.publish.microservice`을(를) `false`(으)로 설정합니다.
1. 마이크로서비스 기반 게시를 사용할 때 DITA 프로세스에 할당되는 메모리는 얼마입니까? DITA 프로파일 및 매개변수를 통해 제어됩니까?
   * 마이크로서비스 기반 게시를 사용하면 메모리 할당이 DITA 프로파일 및 매개변수를 통해 제어되지 않습니다. 서비스 컨테이너에서 사용할 수 있는 총 메모리는 8GB이며, 이 중 6GB는 DITA-OT 프로세스에 할당됩니다.


## 부록 {#appendix}

**파일**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**컨텐츠**:

```
{
"service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
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
