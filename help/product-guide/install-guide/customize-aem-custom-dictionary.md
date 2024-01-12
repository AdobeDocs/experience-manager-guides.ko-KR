---
title: AEM 기본 사전 사용자 지정
description: AEM 기본 사전을 사용자 지정하는 방법 알아보기
exl-id: 8bfd3ea7-0be8-4e7a-b389-5face043200b
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '173'
ht-degree: 2%

---

# AEM 기본 사전 사용자 지정 {#id209SD8000WU}

웹 편집기는 AEM 맞춤법 검사기 또는 브라우저의 맞춤법 검사기를 사용하도록 구성할 수 있습니다. AEM 맞춤법 검사기로 작업하는 경우 사용자 정의 단어 목록을 유연하게 정의할 수 있습니다. 그런 다음 이러한 사용자 정의 단어는 AEM 사전에 추가되며 웹 편집기에서 \(부정확함\) 로 플래그가 지정되지 않습니다.

다음 단계를 수행하여 AEM 사전에 추가된 사용자 정의 단어 목록을 만듭니다.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 노드로 이동합니다.

   /apps/fmdita/config

1. user\_dictionary.txt라는 새 파일을 생성합니다.

1. 파일을 열고 사용자 지정 사전에 정의할 단어 목록을 추가합니다.

   다음 스크린샷은 user\_dictionary.txt 파일에 추가된 사용자 정의 단어 목록을 보여 줍니다.

   ![](assets/custom-words-list-dictionary.png){width="650" align="left"}

1. 파일을 저장하고 닫습니다.


작성자는 웹 편집기 세션을 다시 시작하여 AEM 사전에 업데이트된 사용자 정의 단어 목록을 가져와야 합니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
