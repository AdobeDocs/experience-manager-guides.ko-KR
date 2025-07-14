---
title: 기타 설정 구성
description: Experience Manager Guides의 여러 부서에 대해 폴더, 에셋 폴더, 변수, 코드 조각, 조건 등을 구성하는 방법에 대해 알아봅니다.
feature: Authoring
role: Admin
level: Experienced
source-git-commit: 5f42540a32da6e85a5c8aa0831582ce871c9088a
workflow-type: tm+mt
source-wordcount: '360'
ht-degree: 0%

---

# 다른 설정 구성

관리자는 학습 과정 작성자 및 게시자에 대해 다음 설정을 구성할 수도 있습니다.

- **폴더 설정**
   - **다른 폴더 만들기**: 엔터프라이즈의 다른 부서나 제품에서 작업하는 작성자와 게시자를 위한 폴더를 만들 수 있습니다. 이러한 폴더는 부서별 학습 과정 작성 및 분산 관리를 지원하기 위해 각기 다른 작성 및 출력 템플릿으로 구성된 특정 폴더 프로필에 매핑할 수 있습니다.

     저장소 패널에서 새 폴더를 만들 수 있습니다.

     ![](assets/create-new-folder.png){width="350" align="left"}
   - **언어 폴더 만들기**: 콘텐츠를 다른 언어로 번역하는 경우 각 언어에 해당하는 폴더를 만들어야 합니다. 이러한 각 언어 폴더에는 해당 언어에 해당하는 콘텐츠가 포함됩니다.

     자세한 내용은 [콘텐츠 번역 모범 사례](../user-guide/translation-first-time.md)를 참조하세요.
   - **Assets 관리**: 폴더와 마찬가지로 여러 부서의 요구 사항에 맞게 다른 Assets 폴더를 만들 수도 있습니다. 이렇게 하면 작성자와 게시자가 템플릿, 이미지 및 기타 에셋에 구성된 올바른 CSS에 액세스할 수도 있습니다.

     ![](assets/configure-assets-folder.png){width="350" align="left"}
- **코드 조각**: 작성자가 올바른 코드 조각에 액세스할 수 있도록 폴더 수준에서 코드 조각을 구성할 수 있습니다. Experience Manager Guides에서는 관리자만 코드 조각을 만들 수 있으며, 이 코드 조각은 편집기의 작성자가 사용할 수 있습니다.

  편집기의 왼쪽 패널에서 코드 조각에 액세스할 수 있습니다.

  ![](assets/create-snippets.png){width="350" align="left"}
- **조건**: 관리자는 전역 또는 폴더 수준에서 표준 DITA 지원 조건부 특성을 구성할 수 있습니다. 그런 다음 작성자는 원하는 조건을 콘텐츠에 끌어다 놓기만 하면 구성된 조건을 사용합니다.

  편집기의 왼쪽 패널에서 조건에 액세스할 수 있습니다.

  ![](assets/create-conditions.png){width="350" align="left"}
- **변수**: 콘텐츠를 더 휴대하고 일관되고 쉽게 업데이트할 수 있도록 변수를 정의할 수 있습니다. 출력을 생성하는 동안 변수가 선택한 변수 세트의 값으로 대체되므로 사용자 정의된 출력을 효율적으로 생성할 수 있습니다.

  자세한 내용은 [새 변수 만들기](../native-pdf/native-pdf-variables.md#create-a-new-variable)를 참조하세요.

- **편집기 도구 모음**: 조직의 필요에 따라 편집기 도구 모음을 사용자 지정할 수 있습니다. 예를 들어 도구 모음 버튼의 이름을 변경하고 위치를 변경하는 등의 작업을 선호할 수 있습니다.

  자세한 내용은 [XML 편집기 구성 및 사용자 지정](../cs-install-guide/conf-folder-level.md#configure-and-customize-the-xml-editor-id2065g300o5z)을 참조하세요.
