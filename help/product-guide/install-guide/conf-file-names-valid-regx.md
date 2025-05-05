---
title: 올바른 파일 이름 문자에 대한 Regx 구성
description: 올바른 파일 이름 문자에 대해 Regx를 구성하는 방법에 대해 알아봅니다.
exl-id: 876dfc77-078f-4341-b99d-02a453d2e065
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '396'
ht-degree: 0%

---

# 올바른 파일 이름 문자에 대한 Regx 구성 {#id214BD0550E8}

AEM Guides 3.8 릴리스부터 관리자는 파일 이름에 사용할 수 있는 유효한 특수 문자 목록을 정의할 수 있습니다. 이전 릴리스에서는 사용자가 `@`, `$`, `>` 등의 특수 문자가 포함된 파일 이름을 정의할 수 있었습니다. 이러한 특수 문자로 인해 DITA 맵 대시보드에서 주제를 열거나 목차에서 주제의 링크를 클릭하는 동안 문제가 발생했습니다. URL의 특수 문자로 인해 페이지가 열리지 않는 경우가 많습니다.

유효한 파일 이름 문자에 대한 regx를 정의할 수 있는 구성을 사용하면 시스템에서 파일이 내부적으로 명명되는 방식을 완벽하게 제어할 수 있습니다. 파일 이름에 사용할 수 있는 특수 문자 목록을 정의할 수 있습니다. 기본적으로 올바른 파일 이름 구성에는 &quot;`a-z A-Z 0-9 - _`&quot;이(가) 포함되어 있습니다. 새 파일을 만드는 동안 파일 제목에 특수 문자가 있을 수 있지만, 내부적으로 파일 이름에서 &quot;`-`&quot;(으)로 바뀝니다. 예를 들어 파일 제목을 &quot;Introduction 1&quot; 또는 &quot;Introduction@1&quot;로 지정할 수 있습니다. 이 두 경우에 대해 생성되는 해당 파일 이름은 &quot;Introduction-1&quot;입니다.

올바른 문자 목록을 정의할 때 이 문자 &quot;`*/:[\]|#%{}?&<>"/+`&quot;은(는) 항상 &quot;`-`&quot;(으)로 대체됩니다.

유효한 특수 문자 목록을 구성하지 않으면 파일 생성 프로세스에서 예기치 않은 결과가 발생할 수 있습니다. 이러한 오류를 방지하려면 빌드를 3.8 릴리스로 업그레이드한 후 즉시 이 구성을 변경하는 것이 좋습니다.

파일 이름에서 올바른 \(또는 허용된\) 문자에 대해 regx를 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 클릭합니다.

1. **Regex for Valid Characters** 속성에서 속성이 \[-a-zA-Z0-9\_\] (으)로 설정되어 있는지 확인하십시오. 이 목록에 문자를 더 추가할 수 있지만 기본 문자는 이러한 것이고 목록은 하이픈 &quot;-&quot;로 시작해야 합니다.

   >[!NOTE]
   >
   > 이 속성은 파일 이름에만 적용되고 폴더 이름에는 적용되지 않습니다.

1. **저장**&#x200B;을 클릭합니다.


>[!NOTE]
>
> 유효한 파일 이름 문자 목록과 유사하게 AEM Site 출력에 유효한 파일 이름 문자 목록을 지정할 수도 있습니다. 자세한 내용은 [AEM 사이트 출력에 대해 올바른 파일 이름 구성](conf-file-names-valid-regx-aem-site-output.md#)을 참조하십시오.

**상위 항목:**&#x200B;[&#x200B;파일 이름 구성](conf-file-names.md)
