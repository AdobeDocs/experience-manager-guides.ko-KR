---
title: 사용자 지정 DITA 맵 템플릿 구성
description: 사용자 지정 DITA 맵 템플릿을 구성하는 방법 알아보기
exl-id: a0eeb43c-06e4-4922-a005-704e8929063f
feature: Template Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '336'
ht-degree: 1%

---

# 사용자 지정 DITA 맵 템플릿 구성 {#id1774F04F05Z}

AEM Guides에는 DITA 맵과 북맵이라는 두 가지 기본 맵 템플릿이 포함되어 있습니다. 이러한 템플릿을 기반으로 맵을 만들거나 고유한 맵 템플릿을 정의하여 새 맵을 만드는 데 사용할 수 있습니다.

사용자 정의 맵 템플릿을 추가하려면 다음 단계를 수행하십시오.

1. 관리자로 Adobe Experience Manager에 로그인합니다.

1. Assets UI에서 맵 템플릿 파일을 저장하도록 구성된 폴더로 이동합니다. 기본적으로 모든 맵 템플릿은 /content/dam/dita-templates/maps 폴더에 저장됩니다.

   >[!NOTE]
   >
   > 주제 또는 맵 템플릿을 저장하도록 사용자 지정 위치를 구성하려면 [사용자 지정 DITA 템플릿 폴더 경로 구성](conf-template-tags-custom-dita-topic-template.md#id191LCF0095Z)을 참조하십시오.

1. **만들기** \> **DITA 템플릿**&#x200B;을 클릭합니다.

1. 블루프린트 페이지에서 만들려는 맵 템플릿의 유형을 선택합니다.

   >[!NOTE]
   >
   > 맵 또는 북맵 템플릿을 새 템플릿의 기반으로 사용할 수 있습니다.

1. **다음**&#x200B;을 클릭합니다.

1. 새 템플릿 속성 페이지에서 템플릿에 대한 **제목** 및 **이름**&#x200B;을 입력하십시오.

   >[!NOTE]
   >
   > 템플릿의 제목 을 기반으로 이름이 자동으로 제안됩니다. 이름을 수동으로 지정하려면 이름에 공백, 아포스트로피 또는 중괄호가 포함되어 있지 않고 .ditamap으로 끝나야 합니다.

1. **만들기**&#x200B;를 클릭합니다.

   맵이 생성됨 메시지가 나타납니다.

   맵 편집기에서 편집할 템플릿을 열거나 템플릿 저장소 위치에 템플릿 파일을 저장하도록 선택할 수 있습니다. 템플릿이 생성되면 맵 편집기 를 사용하여 작성 요구에 따라 템플릿을 사용자 정의할 수 있습니다. 템플릿이 준비되면 전역 또는 폴더 수준 프로필과 연결해야 합니다.


다음에 새 맵을 만들 때 템플릿이 블루프린트 페이지에 표시됩니다. DITA 맵 만들기에 대한 자세한 내용은 Adobe Experience Manager Guides as a Cloud Service 사용 안내서를 참조하십시오.

>[!TIP]
>
> 사용자 지정 맵 템플릿 사용에 대한 모범 사례는 모범 사례 안내서의 *사용자 지정 템플릿* 섹션을 참조하십시오.

**상위 항목:**[&#x200B;항목 및 맵 템플릿 구성](conf-template-tags.md)
