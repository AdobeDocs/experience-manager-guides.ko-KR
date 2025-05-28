---
title: Experience Manager Guides에서 Adobe Workfront 구성
description: Experience Manager Guides에서 Workfront을 구성하는 방법 알아보기
feature: Authoring
role: Admin
level: Experienced
exl-id: 1f72642c-e694-47cd-9182-f4f4aaf69655
source-git-commit: d5068ac73748ec7bc047450a947924b40977748f
workflow-type: tm+mt
source-wordcount: '480'
ht-degree: 3%

---

# Adobe Workfront 구성

Adobe Workfront은 팀 및 조직이 작업을 효율적으로 계획, 추적 및 관리할 수 있도록 지원하는 클라우드 기반의 작업 관리 솔루션입니다. Experience Manager Guides과 Adobe Workfront을 통합하면 Experience Manager Guides 핵심 CCMS 기능 외에도 강력한 프로젝트 관리 기능에 액세스하여 작업을 효율적으로 계획, 할당 및 추적할 수 있습니다.

Experience Manager Guides의 [Adobe Workfront 통합](../user-guide/workfront-integration.md)에 대해 자세히 알아보세요.

## 사전 요구 사항

시작하기 전에 다음을 확인하십시오.

1. Adobe Workfront에 대한 표준 액세스 권한과 Experience Manager Guides에 대한 관리자 액세스 권한이 있습니다.
2. 아래 필드를 사용하여 Adobe WorkfrontExperience Manager Guides 에 필요한 [새 사용자 정의 양식을 만듭니다](https://experienceleague.adobe.com/en/docs/workfront/using/administration-and-setup/customize/custom-forms/design-a-form/design-a-form).

   | 필드 유형 | 레이블 | 이름 | 선택 사항(값 표시 활성화됨) |
   |------------|------|------|-------------------------------|
   | 단일 선택 드롭다운 | 작업 유형 | 작업 유형 | 작성(값 = 작성자), 게시(값 = 게시), 번역(값 = 번역), 검토(값 = 검토) |
   | 단일 선택 드롭다운 | 작업 상태 | task-state | 작성(값 = 작성자), 검토(값 = 검토) |
   | 서식이 있는 텍스트 | 작성자 목록 | author-list | - |
   | 서식이 있는 텍스트 | 검토자 목록 | 검토자 목록 | - |
   | 한 줄 텍스트 | URL 검토 | review-url | - |
   | 한 줄 텍스트 | 작업 URL | task-url | - |
   | 한 줄 텍스트 | 이메일 제목 | 이메일 제목 | - |

>[!NOTE]
>
> * 위의 표에서 선택 항목은 **작업 유형** 필드에서 사용할 수 있는 옵션을 나타냅니다. 각 옵션에 대해 **작업 이름** 및 **작업 값**&#x200B;을 제공해야 합니다. 각 작업 유형의 이름과 값은 위의 표에 언급된 것과 정확히 동일해야 합니다. 예를 들어 작업 유형 작성자의 경우 **작성**&#x200B;을(를) 이름으로 지정하고 **작성자**&#x200B;을(를) 해당 값으로 지정하십시오.
> * 온-프레미스 서비스로 작업할 때는 항상 `localhost`이(가) **일 CQ 링크 외부화** 구성에서 올바른 서버 주소로 바뀌는지 확인하여 전자 메일 알림에서 해결된 작업 링크를 제대로 수신해야 합니다.

## 시작하기

Experience Manager Guides에서 Adobe Workfront을 구성하려면 다음 단계를 수행하십시오.

1. **도구 패널**&#x200B;을 열고 **안내**&#x200B;를 선택하세요.
2. **Workfront 구성**&#x200B;을 선택합니다.

   **Workfront 구성** 페이지가 표시됩니다.

   ![](assets/configure-workfront-page.png)

3. **Workfront 구성** 페이지에서 조직의 Workfront 도메인, 클라이언트 ID 및 클라이언트 암호 키의 전체 URL을 입력합니다.

   Adobe Workfront 설정에 구성된 **클라이언트 ID** 및 **클라이언트 암호** 키에 액세스하려면 `Setup >> Systems>> oAuth2 Applications`(으)로 이동하십시오.

   Adobe Workfront 도메인 구성에 대한 자세한 내용은 [Workfront 통합을 위한 OAuth2 애플리케이션 만들기](https://experienceleague.adobe.com/en/docs/workfront/using/administration-and-setup/configure-integrations/create-oauth-application#create-an-oauth2-application-using-user-credentials-authorization-code-flow)의 인증 코드 흐름 섹션을 참조하십시오.

4. **로그인 및 확인**&#x200B;을 선택합니다.

   Adobe Workfront 로그인 페이지로 리디렉션됩니다.
5. Adobe Workfront 전자 메일 주소를 사용하여 로그인한 다음 **액세스 허용**&#x200B;을 선택하여 Oauth2 응용 프로그램이 각 Adobe Workfront 계정에 액세스할 수 있도록 합니다.

   Experience Manager Guides의 Workfront 구성 페이지로 자동 리디렉션됩니다.

6. 사용자 정의 양식 드롭다운 목록에서 Experience Manager Guides용으로 만든 Adobe Workfront 사용자 정의 양식을 선택합니다. [필수 구성 요소](#prerequisites)를 봅니다.
7. Workfront 구성 변경 사항을 적용하고 저장하려면 **저장 후 닫기**&#x200B;를 선택합니다.

구성하고 나면 Adobe Workfront에 있는 것과 동일한 전자 메일 주소를 사용하여 [Experience Manager Guides에 사용자를 추가](https://experienceleague.adobe.com/en/docs/workfront/using/administration-and-setup/add-users/create-manage-users/add-users)합니다.
