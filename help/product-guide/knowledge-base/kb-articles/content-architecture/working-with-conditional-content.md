---
title: 조건부 콘텐츠 작업
description: 에서 조건을 만든 다음 조건부 콘텐츠 생성을 설정하는 방법을 알아봅니다 [!DNL AEM Guides]
role: User
exl-id: a86007e3-48d1-458b-84a7-b683e113e5b2
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '199'
ht-degree: 0%

---

# 조건부 콘텐츠 작업

**사용 사례**

* 작성자는 콘텐츠에 대한 조건을 설정하여 콘텐츠에 표시되는지 여부를 제어할 수 있습니다.

* 작성자는 게시할 때 다른 조건을 표시하거나 숨길 수 있습니다.

* 예를 들어 작성자는 콘텐츠에 버전 1.0 및 버전 2.0으로 속성을 추가하고, 조건을 사용하여 릴리스 1.0의 버전 1.0을 포함하고 버전 2.0을 제외할 수 있습니다.

**1단계**

에서 설명서와 관련된 조건을 정의합니다. [!UICONTROL 폴더 프로필]: 섹션을 참조하십시오 **전역 또는 폴더 수준 프로필에 대한 조건부 속성 구성** 위치: [설치 및 구성 안내서 69페이지](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf)

![폴더 프로필에서 조건 구성](assets/conditions-in-profiles.png)

**2단계**

다음 항목 선택 **[!UICONTROL 폴더 프로필]** 의 1단계에서 정의됨 **사용자 환경 설정** XML 편집기: 섹션을 참조하십시오 **사용자 환경 설정** 위치: [사용 안내서 41페이지](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf)


**3단계**

조건을 사용하여 컨텐츠의 섹션을 조건화합니다. 섹션을 참조하십시오. **조건** 위치: [사용 안내서의 90페이지](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf)

![웹 편집기에서 조건 사용](assets/conditions-in-web-editor.png)

**4단계**

맵 수준에서 조건 사전 설정을 정의하여 출력에서 활성화할 조건을 선택합니다. 섹션 을 참조하십시오. **조건 사전 설정 사용** 위치: [사용 안내서 249페이지](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_User-Guide_EN.pdf)
