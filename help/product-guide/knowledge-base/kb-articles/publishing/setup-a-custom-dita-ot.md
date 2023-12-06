---
title: 에서 사용자 정의 DITA-OT 설정 [!DNL AEM Guides]
description: 에서 사용자 정의 DITA-OT를 설정하는 방법 알아보기 [!DNL Adobe Experience Manager Guides]
role: Admin
exl-id: f479c2cf-5b8b-4517-be97-81303468007a
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '143'
ht-degree: 0%

---

# 에서 사용자 정의 DITA-OT 설정 [!DNL AEM Guides] AEM용

사용자 지정 DITA-OT를 추가하는 단계는 섹션에 설명되어 있습니다 _사용자 지정 DITA-OT 플러그인 사용_ / _설치 및 구성 안내서_.

높은 수준에서 단계는 다음과 같습니다.

+ 기본 DITA-OT 가져오기
   + 기본 DITA-OT의 복사본을 가져오려면 [!DNL AEM Guides], 경로에서 다운로드 `/etc/fmdita/dita_resources/DITA-OT.zip`
   + 다른 버전을 다운로드하려면 다음에서 다운로드할 수 있습니다. [dita-ot 저장소](https://www.dita-ot.org/download)
+ DITA-OT와 유사하게 변경 [새 플러그인 추가](https://www.dita-ot.org/dev/topics/plugins-installing.html), 또는 기존 플러그인 사용자 지정(아래 관련 링크 섹션의 예제 참조)
+ 업로드 `DITA-OT.zip` 수신처 `/apps/<project-folder>/dita_resources` (사용자 지정 프로젝트 폴더를 만드는 것이 좋습니다.)
+ 다음을 통해 DITA 프로필 추가 **[!UICONTROL 도구]** > **[!UICONTROL 안내서]** > **[!UICONTROL DITA 프로파일]** 사용자 지정 DITA-OT가 업로드된 DITA-OT 경로 사용(아래 스크린샷 참조)
  ![DITA 프로파일](assets/dita-profile.png)

>[!MORELIKETHIS]
>
>+ [DITA-OT 플러그인 샘플 사용자 정의](https://www.dita-ot.org/dev/topics/pdf-customization.html)
