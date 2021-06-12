/**
 * @description       : 
 * @author            : gaur.puneet@outlook.com
 * @group             : 
 * @last modified on  : 06-12-2021
 * @last modified by  : gaur.puneet@outlook.com
 * Modifications Log 
 * Ver   Date         Author                    Modification
 * 1.0   06-12-2021   gaur.puneet@outlook.com   Initial Version
**/
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        try {
            return [
                SELECT
                    Id,
                    Name,
                    Type,
                    Industry
                FROM
                    Account
                WITH SECURITY_ENFORCED
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String type){
        try {
            return [
                SELECT
                    Id,
                    Name,
                    Type,
                    Industry
                FROM
                    Account
                Where
                    Type = :type
                WITH SECURITY_ENFORCED
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    public AccountController() {

    }
}
