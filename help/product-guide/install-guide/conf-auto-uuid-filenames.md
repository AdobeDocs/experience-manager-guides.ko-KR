---
title: UUID를 기반으로 자동 파일 이름 구성
description: UUID를 기반으로 자동 파일 이름을 구성하는 방법 알아보기
exl-id: 2a599228-6d46-494f-a57a-96c3f30e073a
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '217'
ht-degree: 0%

---

# UUID를 기반으로 자동 파일 이름 구성 {#id205QG070D5Z}

기본적으로 주제 또는 맵 파일을 만들 때 작성자에게 파일 이름도 지정할 수 있는 옵션이 제공됩니다. 작성자는 필요에 따라 자유롭게 파일 이름을 할당할 수 있습니다. 그러나 이로 인해 불일치가 발생할 수 있으며 광범위한 파일 이름이 대규모 문서 시스템에서 볼 수 있습니다. 관리자는 작성자가 시스템에서 만드는 파일의 파일 이름을 할당하지 못하도록 제한할 수 있습니다. 모든 새 주제 또는 맵 파일에 대해 UUID 기반 파일 이름을 자동으로 할당하도록 선택할 수 있습니다.

시스템에서 생성된 모든 새 파일에 대해 UUID 기반 파일 이름을 자동으로 할당하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.xmleditor.config.XmlEditorConfig* 번들을 검색하고 클릭합니다.

1. **UUID 기반 시스템 파일 이름 사용** 옵션을 선택합니다.

1. **저장**&#x200B;을 클릭합니다.


>[!NOTE]
>
> 기본적으로 이 옵션은 꺼져 있습니다. 이 옵션을 켜면 작성자가 새 주제 또는 맵 파일을 만드는 동안 파일 이름을 지정하는 옵션이 표시되지 않습니다. Assets UI 및 웹 편집기에서 새 주제 또는 맵 파일을 만들 수 있습니다.

**상위 항목:**[&#x200B;파일 이름 구성](conf-file-names.md)
