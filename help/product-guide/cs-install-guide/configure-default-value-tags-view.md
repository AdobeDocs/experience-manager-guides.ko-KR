---
title: 태그 보기에 대한 기본값 구성
description: 태그 보기에 대한 기본값을 구성하는 방법 알아보기
exl-id: 3ab75101-4c23-4e45-bfcf-76c1f5b92c96
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '215'
ht-degree: 0%

---

# 태그 보기에 대한 기본값 구성 {#id223GN0M0NDC}

AEM Guides을 사용하면 웹 편집기에서 태그 보기의 기본 상태를 구성할 수 있으므로 새 사용자의 세션에 대해 기본적으로 태그 보기를 켜거나 끌 수 있습니다.태그 보기의 기본값을 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager에 관리자로 로그인하여 UI 구성 파일을 다운로드합니다.
1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.
1. **전역 프로필** 타일을 클릭합니다.
1. **XML 편집기 구성** 탭을 선택하고 맨 위의 **편집** 아이콘을 클릭합니다.
1. **XML 편집기 UI 구성** 섹션에서 **다운로드** 아이콘을 클릭하여 로컬 시스템에서 `ui_config.json` 파일을 다운로드합니다.
1. `ui_config.json` 파일에서 다음과 같이 defaultValues 섹션을 변경하여 기본 태그 보기 상태를 변경합니다.

```
"defaultValues":
                {
                "tagsView": true
                }
```

1.) 파일을 저장하고 업로드합니다.

>[!NOTE]
>
> 태그 보기를 활성화/비활성화하는 웹 편집기의 사용자 기본 설정은 이 기본값보다 우선합니다. 따라서 사용자가 웹 편집기에서 태그 보기를 활성화하면 세션 중에도 활성화된 상태로 유지됩니다.

**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
