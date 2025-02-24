---
title: 웹 편집기 사용자 지정
description: 편집기에서 붙여넣은 표의 표시를 사용자 지정하는 방법을 알아봅니다
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: d03ac6ba3ec8e5c52c31a3239e2043bbae79622e
workflow-type: tm+mt
source-wordcount: '223'
ht-degree: 0%

---

# 붙여넣은 테이블의 표시 구성

편집기의 보조 도구 모음을 사용하여 주제의 현재 또는 다음 유효한 위치에 간단한 표를 삽입할 수 있습니다. Microsoft Word 또는 Excel에서 표를 복사하여 주제 파일에 직접 붙여넣을 수도 있습니다.

관리자는 복사된 테이블이 표시되는 방식을 구성할 수 있습니다. 기본적으로 이러한 복사된 테이블은 편집기에 `simpletable`(으)로 표시됩니다. 그러나 XML 편집기 구성 설정을 업데이트하여 복사된 테이블을 `tgroup`(으)로 표시하도록 이 설정을 변경할 수 있습니다.

>[!NOTE]
>
> 병합된 행 또는 열이 있는 테이블을 복사하면 XML 편집기 구성에 구성된 테이블 설정과 관계없이 `simpletable`이(가) 아닌 일반 테이블 `trgoup`(으)로 붙여 넣습니다.

기본 테이블 형식을 업데이트하려면 다음 단계를 수행합니다.

1. Adobe Experience Manager 탐색 페이지를 열고 왼쪽에서 **도구**&#x200B;를 선택합니다.
2. [도구] 패널의 도구 목록에서 **안내서**&#x200B;를 선택합니다.
3. **폴더 프로필**&#x200B;을 선택한 다음 테이블 설정을 업데이트할 프로필을 선택하십시오.
4. **XML 편집기 구성** 탭으로 이동합니다.
5. 맨 위에 있는 **편집** 아이콘을 선택합니다.
6. **다운로드** 아이콘을 선택하여 로컬 시스템에서 `ui_config.json` 파일을 다운로드합니다.
7. `ui_config.json` 파일에서 아래와 같이 `simpletable` 설정을 업데이트합니다.

   ```
   "htmlToDitaMapping":{ "table": {
   "name" : "tgroup",
   "wrapTag" : {
       "dita" : "table",
       "html" : "div"
   }
   } },
   ```


업데이트되었으면 파일을 저장하고 업로드합니다.

